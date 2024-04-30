interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
 
  {
    title: 'End-to-End Data Engineering with dbt and Looker Studio',
    description: `This project showcases an end-to-end data engineering workflow, starting from data extraction from external sources to storage in Google Cloud Storage. It involves creating a robust dbt model for data transformation and concludes with data visualization using Looker Studio. The project demonstrates practical application of modern data engineering techniques and provides insights into effective data pipeline creation, management, and business intelligence analysis.`,
    imgSrc: '/static/images/arch_2.png', // Replace with the path to your image
    href: 'https://www.jonahboliver.com/blog/de-zc-w4', 
  },
  {
    title: 'End-to-End Data Engineering with Dagster, AWS S3, Apache Spark and dbt',
    description: `This project aims to implement a scalable end-to-end solution that efficiently processes approximately 8GB of data using advanced ETL techniques and big data technologies, ensuring that insights are both accessible and actionable. It involves creating a robust dbt model for data transformation and concludes with data visualization using Looker Studio. The project demonstrates practical application of modern data engineering techniques and provides insights into effective data pipeline creation, management, and business intelligence analysis.`,
    imgSrc: '/static/images/de-zc-capstone-dag.png', // Replace with the path to your image
    href: 'https://github.com/jboliv01/yelp_end_to_end_batch_pipeline?tab=readme-ov-file#yelp-data-insights-dashboard', 
  },
]

export default projectsData
