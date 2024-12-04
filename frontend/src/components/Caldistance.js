import React from "react";

export function Caldistance({ Caldistance, tokenSymbol }) {
    return (
        <div>
            <form
                onSubmit={(event) =>{
                    event.preventDefault();
                    const formData = new FormData(event.target);
                    // const to = formData.get("to");
                    const distance = formData.get("StartingPoint");
                    if(distance){
                        Caldistance(distance);
                    }
                }}
            />
            <div className="form-group">
                <label>Starting Point:</label>
                <input
                    className="form-control"
                    type="string"
                    name="StartingPoint"
                    placeholder="HKUST Entrance Piazza"
                    required
                />
            </div>
            <div className="form-group">
                <label>Destination:</label>
                <input className="form-control" type="text" name="distance" required />
            </div>
            <div className="form-group text-center" >
                <input className="btn btn-primary" type="submit" value="Fare Estimate" />
            </div>
            <div >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.4269960609686!2d114.26039277483522!3d22.33750047965982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404046ab57ad86d%3A0x5cc45696501c9de8!2z6aaZ5riv56eR5oqA5aSn5a2m5YWl5Y-j5bm_5Zy6!5e0!3m2!1szh-CN!2shk!4v1732764952345!5m2!1szh-CN!2shk" width="600" height="450" style={{ border: 0 }} allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
}
