import React, { useEffect } from "react";
import { Form, Input, InputNumber, Button, Card, Checkbox } from "antd";

const CreateProductForm = ({
  handleAddProduct,
  nameValue,
  setNameValue,
  userInfo,
}) => {
  const [createProductForm] = Form.useForm();

  useEffect(() => {
    return () => {
      console.log("Rời khỏi CreateProductForm");
      setNameValue("");
    };
  }, []);

  useEffect(() => {
    console.log("🚀 ~ file: index.jsx ~ line 28 ~ userInfo", userInfo);
    if (userInfo.id) {
      setNameValue(userInfo.username);
    } else {
      setNameValue("Ahihi");
    }
  }, [userInfo]);

  return (
    <div>
      <Input value={nameValue} onChange={(e) => setNameValue(e.target.value)} />
      <h2>Form tạo sản phẩm</h2>
      <Card style={{ width: 300, margin: "0 auto" }}>
        <Form
          form={createProductForm}
          name="createProductForm"
          layout="vertical"
          initialValues={{
            name: "",
            price: 0,
            isNew: false,
          }}
          onFinish={(values) => handleAddProduct(values)}
        >
          <Form.Item
            label="Tên sản phẩm"
            name="name"
            validateFirst
            rules={[
              {
                required: true,
                message: "Bạn chưa nhập tên sản phẩm!",
              },
              {
                min: 4,
                message: "Tên sản phẩm phải có ít nhất 4 ký tự!",
              },
              {
                max: 50,
                message: "Tên sản phẩm không được vượt quá 50 ký tự!",
              },
            ]}
          >
            <Input placeholder="Tên sản phẩm" />
          </Form.Item>

          <Form.Item
            label="Giá sản phẩm"
            name="price"
            rules={[
              {
                required: true,
                message: "Bạn chưa nhập giá sản phẩm!",
              },
              {
                type: "number",
                min: 10000,
                message: "Giá sản phẩm phải lớn hơn 10.000₫!",
              },
            ]}
          >
            <InputNumber
              formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
              style={{ width: "100%" }}
            />
          </Form.Item>

          <Form.Item name="isNew" valuePropName="checked">
            <Checkbox>Is New</Checkbox>
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default CreateProductForm;
