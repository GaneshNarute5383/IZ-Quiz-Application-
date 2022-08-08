import EmployeeModel from '../models/Employee.js'

class EmployeeController {
  static getAllDoc = async (req, res) => {
    try {
      const result = await EmployeeModel.find()
     

      res.send(result)
    } catch (error) {
      console.log(error)
    }
  }
  static insertDoc = async (req, res) => {
    try {
      // console.log("data:"+req.body.q1_ans);
      const emp = new  EmployeeModel(req.body)
      emp.save();
      res.send("save successfully")
    } catch (error) {
      console.log(error)
    }
  }
}
export default EmployeeController