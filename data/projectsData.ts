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
]

export default projectsData
