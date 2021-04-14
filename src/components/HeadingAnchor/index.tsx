import React from 'react';
import styles from './headingAnchor.module.scss';

export interface markDownID {
  level: number;
  name: string;
  id: string;
}

export interface AnchorList {
  anchorList?: markDownID[];
}

const index: React.FC<AnchorList> = ({ anchorList }) => {
  console.log(`anchorList ${anchorList?.length}`);
  return (

    <div className = {styles.contentsSider}>
    <div className={styles.anchorPosition}>
      <div className={styles.wrapper}>
        <div className={styles.anchorList}>
          {anchorList?.map((v) => (
            <div key={v.id} className={styles[`hlevel__${v.level}`]}>
              <a href={v.id}> {v.name} </a>
            </div>
          ))}
        </div>
      </div>
    </div>

    </div>
  );
};

export default index;
