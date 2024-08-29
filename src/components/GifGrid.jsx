import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ categories }) => {

    const { images, isLoading } = useFetchGifs(categories);

    return (
        <>
            <h3>{ categories }</h3>
             {
                isLoading && ( <h2>Cargando...</h2> )
             }

            <div className="card-grid">
                { 
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id }
                            { ...image }
                        />
                    ))

                }
             
            </div>
         
        </>
    )
}

