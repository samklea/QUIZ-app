
import React from 'react'
import { Link } from 'react-router-dom'

const Pattern = () => {
  return (
    <div>
        <ul>
            <li><Link to="/Q1"><button>1</button></Link></li>
            <li><Link to="/Q2"><button>2</button></Link></li>
            <li><Link to="/Q3"><button>3</button></Link></li>
            <li><Link to="/Q4"><button>4</button></Link></li>
            <li><Link to="/Q5"><button>5</button></Link></li>
            <li><Link to="/Q6"><button>6</button></Link></li>
            <li><Link to="/Q7"><button>7</button></Link></li>
            <li><Link to="/Q8"><button>8</button></Link></li>
            <li><Link to="/Q9"><button>9</button></Link></li>
            <li><Link to="/Q10"><button>10</button></Link></li>
            
        </ul>
    </div>
  )
}

export default Pattern