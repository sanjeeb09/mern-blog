export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Unity Blog
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to Unity Blog! This blog was created by Sanjeeb Kumar Sahoo
              as a personal project to share his thoughts and ideas with the
              world. Sanjeeb is a passionate civil aspirant who loves to write about
              both India as well as World Affairs. He is currently pursuing Msc. Data Science.
            </p>

            <p>
              On this blog, you will find daily articles and news on topics
              Polity & Governance, Science & Tech, Geography & Environment, Economy, International Relations and Internal Security.
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. We believe that a community of learners can help
              each other grow and improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}