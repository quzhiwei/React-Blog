export type BlogData = {
  user:string,
  content:string,
  tag?:blogSection
}

type blogSection= 'daily'|'gaming'|'music'|'others'