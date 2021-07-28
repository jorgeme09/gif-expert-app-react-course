import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = ({}) => {
    const [categories, setCategories] = useState(['One Punch'])

    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>
            <ol>
                {categories.map((category, i) => (
                    <GifGrid key={`${category}-${i}`} category={category}/>
                ))}
            </ol>
        </>
    )
}

export default GifExpertApp

