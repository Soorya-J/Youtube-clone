 
export const API_KEY="AIzaSyCxB8XhP1BkXFZwwvgRvM4uaxQ5BG4eXiA"
 
export const valueConverter = (value)=>{
    if (value>=1000000){
        return(Math.floor(value = value/1000000)) + "M"
        
    }
    else if(value>=1000){
        return(Math.floor(value/1000))+"K"

    }
    else{
        return value;
    }
    
}
 
 export function timeAgo(start_time_str) {
    const startTime = new Date(start_time_str);
    const currentTime = new Date();
    const timeDifference = currentTime - startTime;
    
    if (timeDifference < 60000) {
        return "Just now";
    } else if (timeDifference < 3600000) {
        const minutes = Math.floor(timeDifference / 60000);
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (timeDifference < 86400000) {
        const hours = Math.floor(timeDifference / 3600000);
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
        const days = Math.floor(timeDifference / 86400000);
        return `${days} day${days > 1 ? 's' : ''} ago`;
    }
}

export function scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
   })
}

export function addReadMore(text ) {
    const words = text.split(' ');
  
    if (words.length > 100 ) {
      const truncatedText = words.slice(0, 100).join(' ');
      return truncatedText;
    }
  
    return text;
  }
  
  
  function showFullText() {
   
    const truncatedTextElement = document.getElementById('truncated-text');
    truncatedTextElement.innerHTML = fullText;
  }
  
  