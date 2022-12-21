import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchApi } from "../../redux/mediaSlice";
import MediaItems from '../MediaItems/MediaItems';
export default function Categories() {
    let { type } = useParams();
    console.log(type)
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchApi({ id: "category", type }));
    }, [dispatch, type])
    return (
        <MediaItems />
    )
}
