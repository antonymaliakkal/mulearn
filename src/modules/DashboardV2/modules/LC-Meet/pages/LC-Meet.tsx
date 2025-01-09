import React, { useEffect, useState } from 'react';
import { AiOutlineLike } from "react-icons/ai";
import { RiQuillPenLine } from "react-icons/ri";
import { LuCalendarPlus } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";
import { HiOutlineLocationMarker } from "react-icons/hi";
import styles from './LC-Meet.module.css'

const pathprop = ['Learning Circles', 'UI/UX Designers CET', '16/12/2024 - 04:30PM']

const LcMeet: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    return (
      <div className={styles.container}>
          <div className={styles.pathbar}>
            <span>{pathprop[0]}</span> &gt; <span>{pathprop[1]}</span> &gt; <span>{pathprop[2]}</span>
          </div>
          <div className={styles['main-container']}>
            <div className={styles['main-container-top']}>
                <h1 className={styles['meet-details']}>Meet Details</h1>
                <button className={styles['show-interest']}> <span>Show Interest</span> <AiOutlineLike /> </button>
            </div>
            <div className={styles['main-container-cards']}>
                <div className={styles['card']}>
                  <span>Interest Group</span>
                  <h1>
                    <RiQuillPenLine /> UI/UX Design
                  </h1>
                </div>
                <div className={styles['card']}>
                  <span>Date</span>
                  <h1>
                    <LuCalendarPlus /> 16 Dec 2024
                  </h1>
                </div>
                <div className={styles['card']}>
                  <span>Time</span>
                  <h1>
                    <IoMdTime /> 04:30 PM
                  </h1>
                </div>
                <div className={styles['card']}>
                  <span>Location</span>
                  <h1>
                    <HiOutlineLocationMarker /> College Gazebo
                  </h1>
                </div>
            </div>
          </div>
      </div>
    ) 
}

export default LcMeet;