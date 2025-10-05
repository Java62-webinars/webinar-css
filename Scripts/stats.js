
function getCreditCount(photos) {
    if(!Array.isArray(photos)) {
        throw new Error(`Credit count must be an array of ${photos}`);
    }
      return photos.reduce((acc, p) => {
          const credit = (p.caption && p.caption.split("—")[1])
              ? p.caption.split("—")[1].trim()
              : "Unknown"
          acc[credit]=(acc[credit]||0) + 1;
          return acc
      }, {})
  }


  //Total, Min, Max, Average => caption

function getCaptionStats (photos){
    if(!Array.isArray(photos) || photos.length === 0) {
        return {total:0, min:0, max:0, avg:0 };
    }
    const stats = photos.reduce((acc, photo) => {
        const len = photo.caption? photo.caption.length : 0;
        acc.total += len;
        if(len < acc.min) acc.min = len;
        if(len > acc.max) acc.max = len;
        return acc;
    },{total:0, min:Infinity, max:-1});
    stats.avg=+(stats.total/ photos.length).toFixed(2);
    return stats;
}

function indexPhotosBySrc(photos) {
    if(!Array.isArray(photos)) {
        throw new Error(`Credit count must be an array of ${photos}`);
    }
    return photos.reduce((acc, photo) => {
        acc[photo.src] = photo;
        return acc;
    }, {})
}





// {
//         src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6q8s3heMl_TruN8qmUFkdInUxj_m05NWWtg&s",
//         alt: "Looking at the Crater Half Full",
//         caption: "Looking at the Crater Half Full — NASA/JPL-Caltech"
//     },