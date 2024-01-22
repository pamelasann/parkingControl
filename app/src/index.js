import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfig';
import { ref, onValue } from "firebase/database";

const FetchData = () => {
    const [dataSpot, setDataSpot] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const databaseRef = ref(db, 'prueba1/');;
        onValue(databaseRef, (snapshot) => {
            const data = snapshot.val();
            const newAvailable = Object.keys(data).map(key => ({
                id: key,
                ...data[key]
            }));
            setDataSpot(newAvailable);
            setIsLoading(false);
        })
    }, []);
    return { dataSpot, isLoading };
};

export default FetchData;