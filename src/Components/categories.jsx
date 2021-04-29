import React, {useState} from 'react';

function Categories({items, onClick}) {

    const [active, setActive] = useState(null)
    const handleActive = (index) => {
        setActive(index)
    }

    return (
        <div className="categories">
            <ul>
                <li className={null === active && 'active'} onClick={() => handleActive(null)}>Все</li>
                {items && items.map((item, index) => <li className={index === active && 'active'} onClick={() => handleActive(index)} key={`${item}_${index}`}>{item}</li> )}
            </ul>
        </div>
    );
}





export default Categories;