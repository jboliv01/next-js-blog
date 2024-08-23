interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData = [
  {
    title: 'End-to-End Data Engineering with dbt and Looker Studio',
    description: `This project showcases an end-to-end data engineering workflow...`,
    imgSrcArray: [
      '/static/images/de-zc/w4/dashboard.png',
      '/static/images/de-zc/w4/dbt-dag.png',
      '/static/images/de-zc/w4/dbt-staging-dag.png',
      
      
    ],
    href: 'https://www.jonahboliver.com/blog/de-zc-w4', 
  },
  {
    title: 'End-to-End Data Engineering with Dagster, AWS S3, Apache Spark and dbt',
    description: `This project aims to implement a scalable end-to-end solution...`,
    imgSrcArray: [
      '/static/images/de-zc-capstone-dag.png',
      '/static/images/de-zc/w5/spark-job-complete.png'
      
    ],
    href: 'https://github.com/jboliv01/yelp_end_to_end_batch_pipeline?tab=readme-ov-file#yelp-data-insights-dashboard',
  },
];

export default projectsData;
