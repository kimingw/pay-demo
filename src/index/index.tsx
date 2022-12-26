import { useState, useEffect, useContext } from 'react'
import style from './index.module.css'
import content from './cards'

function Index() {

    return (
        <div className={style.commodity}>
            <div className={style.commodityFloorContent}>
                {content.map((item: any, index: number) => {
                    return (
                        <div key={index} className={style.cardBox}>
                            <div className={style.cardImg}>
                                <div className={style.successImg}>
                                    <img className={style.img} src={item.img} />
                                </div>
                            </div>
                            <div className={style.cardItem}>
                                <div className={style.cardItemName}>{item.name}</div>
                                <div className={style.jdPrice}> {item.priceType} {item.price} </div>
                                <span className={style.startOrdering}>
                                    <span className={style.orderCount}>{item.count}</span>
                                </span>
                            </div>
                            <div className={`${style.btn} ${style.btnBorder}`}>
                                Pay Now
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Index
