import { useState, useEffect, useContext } from 'react'
import style from './index.module.css'
import content from './cards'
import { createXHR } from '../utils'


function Index() {
    const bundleConfrim = async () => {
        createXHR('', 'POST', {
            goodsId: 12,
            goodsName: 'abc'
        }, (res: any) => {
            const { accessSign, chainCode, goodsOrderId, payOrderId } = res
            window.location.href = `https://testnet-web3.hashnut.io/pay?accessSign=${accessSign}&mchOrderNo=${goodsOrderId}&platformId=${payOrderId}&chainCode=${chainCode}`
        }, (res: any) => {
        }, () => {
        })
    }

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
                            <div onClick={bundleConfrim} className={`${style.btn} ${style.btnBorder}`}>
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
