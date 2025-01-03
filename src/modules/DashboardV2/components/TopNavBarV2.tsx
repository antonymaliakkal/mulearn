import SearchImage from "../assets/svg/SearchImage";
import styles from "./TopNavBarV2.module.css";

interface TopNavBarProps {
    currentPage : string;
}

const TopNavBarV2 = ({ currentPage }: TopNavBarProps) => {
    return(
      //   <div className={styles.container}> 
      //   <div className="flex items-center gap-4"> 
      //     <h1 className={styles.title}>{currentPage}</h1> 
      //   </div> 
      // </div>

      <div className={styles.container}>
      <div className={styles.titlecontainer}>
          <h1 className={styles.title}>{currentPage}</h1>
      </div>
      <div className={styles.searchcontainer}>
      <SearchImage></SearchImage>
      <input
          type="text"
          placeholder="Search for skills, jobs, locations, colleges"
          className={styles.searchbar}
      />
      </div>
      
  </div>


    )
}

export default TopNavBarV2;