
function getCreditCount(photos) {
      return photos.reduce((acc, p) => {
          const credit = (p.caption && p.caption.split("—")[1])
              ? p.caption.split("—")[1].trim()
              : "Unknown"

          acc[credit] = (acc[credit] || 0) + 1
          return acc
      }, {})
  }

