import { useRouter } from 'next/router';


function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId
  console.log(newsId)
  
  // send a request to the backend API
  // to fetch the news with newsId

  return <h1>News Detail</h1>
}

export default DetailPage;