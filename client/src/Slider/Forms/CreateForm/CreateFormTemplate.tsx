import * as React from 'react';


export const CreateFormTemplate = ()=>{
    return <div>
        <div>
            <label htmlFor="image">Image url</label>
            <input id="image" type="text" />
        </div>
        <div>
            <label htmlFor="sImage">Image for small screen</label>
            <input id="sImage" type="text" />
        </div>
        <div>
            <label htmlFor="text">Text</label>
            <input id="text" type="text" />
        </div>
     {/*    <select name="" id="">
            <option value="купить"></option>
            <option value="читать"></option>
            <option value="подробнее"></option>
            <option value="смотреть"></option>
            <option value="узнать"></option>
        </select> */}
       {/*  <div>
            <label htmlFor="ButtonText">enter name</label>
            <input id="ButtonText" type="text" />
            'Купить, Читать, Подробнее, Смотреть, Узнать'
        </div> */}
        
    </div>
}