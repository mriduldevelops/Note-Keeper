import React from 'react'

function Footer() {
    let year = new Date();
    year = year.getFullYear();
  return (
    <div>
      <footer>
        <p>Copyright &#169; {year} </p>
      </footer>
    </div>
  )
}

export default Footer
