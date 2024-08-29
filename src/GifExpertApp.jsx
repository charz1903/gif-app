import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

   const [ categories, setCategories ] = useState([ '' ])

    const onAddCategory = (newCategory) => {
   
        if (categories.includes(newCategory)) return;
        setCategories ([newCategory, ...categories,  ]); 
        // Forma moderna en que React inserta un nuevo elemento (categoría) en el arreglo //
        // Cuando se usa useState, mantiene categorías enteriores ...categories y agrega una nueva 'Valorant'.
    }

    return (
        <> 
             <h1>GifExpertApp</h1>
             <AddCategory 
            //  setCategories={ setCategories}
                onNewCategory={ (value) => onAddCategory(value)}
                currentCaterogies={ categories }
            />
                               
                { categories.map( (categories) => (
                        <GifGrid 
                            key={ categories } 
                            categories={ categories }
                        
                        />
                    ))
                
                }
       </>
    )
}