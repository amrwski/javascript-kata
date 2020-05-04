import React from "react"
import Papa from "papaparse"
import csvFilePath from "../../data/magazines.csv"

class MagList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
    this.updateData = this.updateData.bind(this)
  }

  componentWillMount() {
    Papa.parse(csvFilePath, {
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: this.updateData,
    })
  }

  updateData(result) {
    const data = result.data
    this.setState({ data })
  }

  render() {
    console.log(csvFilePath)
    return <div>Data</div>
  }
}

export default MagList
