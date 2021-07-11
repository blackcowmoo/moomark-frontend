import React from 'react'
import styles from './main.module.scss';

interface Props{


}

const TilePostList: React.FC<Props> = ({children}) => {
  return (
    <ul className={styles.tile_post_list}>
      {children}
    </ul>
  )
}

export default TilePostList
