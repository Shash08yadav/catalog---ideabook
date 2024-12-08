import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams} : {
  searchParams: Promise<{query? : string}>
}){
  const query=(await searchParams).query;
  const posts =[{
    _createdAt:new Date(),
    views:55,
    author:{_id:1,name:'shashwat'},
    _id:1,
    description:'This is a description.',
    image:'https://picsum.photos/200/300',
    ctegory:"Robots",
    title:"We Robots",
  }];

  return (
   
    <>
    <section className="pink_container">
      <h1 className="heading">Pitch your Startup ,<br/>Connect With<br/>Enterpreneurs</h1>
      <p className="sub_heading !max-w-3xl">submit ideas, vote on pitches,and get Noticed in Virtual Competitions.</p>
    <SearchForm query={query}/>
    </section>
    <section className="section_container">
      <p className="text-30-semibold">
        {query ? `Search results for "${query}"` : 'All Startups'}

      </p>
      <ul className="mt-7 card_grid">
  {posts?.length > 0 ? (
    posts.map((post: StartupCardType, index: number) => (
      <StartupCard key={post?._id} post={post} />
    ))
  ) : (
    <p className="no-results">No startups found</p>
  )}
</ul>


    </section>
    </>
  );
}
