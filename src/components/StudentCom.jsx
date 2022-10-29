import React from "react";
import data from "../state/data.json";
import { Dropdown, Menu, Typography, Space } from "antd";
import { useRecoilState } from "recoil";
import { student as studentAtom } from "../state/atoms";

const StudentCom = () => {
  const [student, setStudent] = useRecoilState(studentAtom);

  const changeStu = ({ key }) => {
    setStudent(key);
  };
  const students = [...new Map(data.map((m) => [m.studentId, m])).values()];
  const studentsMenu = (
    <Menu
      onClick={changeStu}
      selectable
      items={students?.map((stu) => ({
        key: stu.studentId,
        label: stu.studentName,
      }))}
    />
  );
  const studentName = students.find(
    (stu) => stu.studentId === +student
  )?.studentName;

  return (
    <Dropdown overlay={studentsMenu} arrow>
      <Typography>
        <Space>
          Student <b>{studentName || "Student"}</b>
        </Space>
      </Typography>
    </Dropdown>
  );
};

export default StudentCom;
