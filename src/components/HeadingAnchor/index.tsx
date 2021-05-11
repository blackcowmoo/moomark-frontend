import { useState } from 'react';
import styles from './headingAnchor.module.scss';

export interface markDownID {
  level: number;
  name: string;
  id: string;
  positionY?: number;
}

export interface AnchorList {
  anchorList?: markDownID[];
  focusAnchor: string;
}

const index: React.FC<AnchorList> = ({ anchorList, focusAnchor }) => {
  console.log(`anchorList ${anchorList?.length}`);
  console.log(focusAnchor);
  return (
    <div className={styles.contentsSider}>
      <div className={styles.anchorPosition}>
        <div className={styles.wrapper}>
          <div className={styles.anchorList}>
            {anchorList?.map((v) => 
            {
              if(v.id===focusAnchor){
                return(
              <div key={v.id} className={styles[`hlevel__${v.level}_focus`]}>
                <a href={v.id}> {v.name} </a>
              </div>
                )

              }
              else {
                return(
              <div key={v.id} className={styles[`hlevel__${v.level}`]}>
                <a href={v.id}> {v.name} </a>
              </div>

                )
              }
            }  
           )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
