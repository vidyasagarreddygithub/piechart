import './index.css'

import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const VaccinationByAge = props => {
  const {vaccinationByAge} = props
  return (
    <div className="agecontainer">
      <h1 className="head">Vaccination by age</h1>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            data={vaccinationByAge}
            startAngle={0}
            endAngle={360}
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="18-44" fill="#2cc6c6" />
            <Cell name="44-60" fill="#6c757d" />
            <Cell name="Above 60" fill="#5a8dee" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge
