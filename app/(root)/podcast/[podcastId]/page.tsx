const PodcastDetail = ({ params }: { params: { paramsId: string } }) => {
  return <p className="text-white-1">Podcast Detail: {params.podcastId}</p>
}

export default PodcastDetail
