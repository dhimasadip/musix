
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getCategory } from '../store/actions/getCategory'

export default () => {
    const categories = useSelector(state => state.categoryReducer.categories)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getCategory())
    }, [])

    return (
        <div>
            <nav aria-label="breadcrumb ">
                <ol className="breadcrumb bg-transparent mb-0">
                    <li className="breadcrumb-item active">Category /</li>
                </ol>
            </nav>
            {
                categories.length > 0 &&
                <div className="row row-cols-1 row-cols-md-3 scrollbar">
                    {
                        categories.map((el,i) => {
                            return (
                                <div className="col mb-4" key = {i}>
                                    <Link to ={{pathname: `/category/${el.id}`, state: {name: el.name}}}>
                                        <div className="card">
                                            <img src={el.icons[0].url} className="card-img-top"></img>
                                            <div className="centered">
                                                <h6 className="text-light text-center">{el.name}</h6>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                    
                </div>
            }
            {
                !categories.length > 0 && <h3 className="text-center text-secondary">Server offline</h3>
            }
        </div>


    )
}