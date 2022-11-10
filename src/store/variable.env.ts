export function variableEnv(){
  if(process.browser) {
    return {
      artworkBack: process.env.ARTWORKBACK,
      innerWidth,
      innerHeight
    }
  }
  
  return {
    artworkBack: '',
    innerWidth: 0,
    innerHeight: 0
  }
}