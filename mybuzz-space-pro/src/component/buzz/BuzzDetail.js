import React from 'react'

const BuzzDetail = (props) => {
    const id = props.match.params.id;
    console.log(id);
    return (
           <div className="container section buzz-details">
            <div className="card z-depth0">
                <div className="card-content">
                    <span className="card-title">Titredu Buzz {id}: </span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro officiis non nulla magnam quas. Libero numquam ipsum veritatis praesentium minima eos non quibusdam eligendi facere doloremque officiis delectus, dolor dolorum!</p>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posté par : </div>
                        <div>Date : </div>
                        <div>Statut : </div>
                    </div>
                </div>
            </div>
           </div>
    )
}

export default BuzzDetail
