import React from 'react'
import styles from './styles.module.css'
import PropTypes from 'prop-types'

export const ExampleComponent = ({
  defaultValue,
  options,
  label,
  selectName,
  wrapperStyle,
  selectStyle
}) => {
  return (
    <div className={styles.dropdownSelect} style={wrapperStyle}>
      <select
        label={label}
        name={selectName}
        id={selectName}
        className={styles.selectName}
        style={selectStyle}
      >
        <option value=''>{defaultValue}</option>
        {options.map((option) => {
          return (
            <option
              value={option.value ? option.value : option.option}
              key={option.option}
            >
              {option.option}
            </option>
          )
        })}
      </select>
    </div>
  )
}
// Prop-Types
ExampleComponent.propTypes = {
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  options: PropTypes.array,
  wrapperStyle: PropTypes.object,
  selectStyle: PropTypes.object
}
