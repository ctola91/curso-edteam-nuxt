export interface Post {
  id: string
  title: string
  description: string
  image: string
  credits: string
  tags: {id: string, name: string, color: string}
}