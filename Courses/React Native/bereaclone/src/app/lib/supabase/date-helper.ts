export  const formatTimeAgo=(createdAt:string):string=>{
    const now=new Date();
    const created=new Date(createdAt);
    const diff=now.getTime()-created.getTime();

    const minutes=Math.floor(diff/(1000*60));
     const hours=Math.floor(diff/(1000*60*60));

     if(minutes<1)return"Just now";
     if(minutes<60)return`${minutes}m ago`;
     if(hours<24) return `${hours}h ago`;
     return `${Math.floor(hours/24)} d ago`;

}


export  const formatTimeRemaining=(expires_at:string):string=>{
    const now=new Date();
    const expires=new Date(expires_at);
    const diff= expires.getTime();-now.getTime()
     if(diff<-0) return 'expired'
    const minutes=Math.floor(diff %(1000*60*60)/(1000*60));
    const hours=Math.floor(diff/(1000*60*60));
     if(hours>0){
        return ` ${hours}h ${minutes}m left`
     }
     return `${minutes}m left`;

}
