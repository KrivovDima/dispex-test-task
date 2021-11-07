import React from 'react';
import Modal from "antd/es/modal/Modal";
import {Button, Form, Input} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {sendingAddClient, sendingUpdateClientData} from "../../../store/reducers/clientsReducer";

function ClientModal(props) {

  const dispatch = useDispatch()

  const {inputMode, editableClientData} = useSelector(state => state.clients);
  const currentFullAddress = useSelector(state => state.addresses.currentFullAddress);
  const addressId = useSelector(state => state.addresses.selectedHouseFlat.id);

  const handleCancel = () => {
    props.onClickClientModal(false);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      +7
    </Form.Item>
  );

  const formik = useFormik({
    initialValues: {
      phone: editableClientData.phone,
      name: editableClientData.name,
      email: editableClientData.email,
    },
    validate: values => {
      const errors = {};
      if (!values.phone) {
        errors.phone = 'Required';
      } else if (!isFinite(Number(values.phone))) {
        errors.phone = 'Invalid phone number';
      } else if (values.phone.length !== 10) {
        errors.phone = 'Invalid length phone number';
      } else if (values.email !== '' && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      return errors;
    },
    onSubmit: values => {
      if (inputMode === 'addition') {
        dispatch(sendingAddClient(values));
      } else {
        dispatch(sendingUpdateClientData(addressId, {clientId: editableClientData.clientId, ...values}));
      }
      formik.resetForm();
      props.onClickClientModal(false);
    }
  })

  return (
    <>
      <Modal title={inputMode === 'addition' ? 'Добавить жильца' : 'Редактировать данные'}
             visible={props.visible}
             onCancel={handleCancel}
             footer={null}
             >
        <p>
          {currentFullAddress},
          {inputMode === 'editing' && <span>Phone:&nbsp;{editableClientData.phone}</span>}
        </p>
        <form onSubmit={formik.handleSubmit}>
          <Form.Item label="Телефон">
            <Input {...formik.getFieldProps('phone')} addonBefore={prefixSelector} style={{ width: '100%' }} />
            {formik.touched.phone && formik.errors.phone && <div style={{color: "tomato"}}>{formik.errors.phone}</div>}
          </Form.Item>
          <Form.Item label="ФИО">
            <Input {...formik.getFieldProps('name')}/>
            {formik.touched.name && formik.errors.name && <div style={{color: "tomato"}}>{formik.errors.name}</div>}
          </Form.Item>
          <Form.Item label="Email">
            <Input {...formik.getFieldProps('email')}/>
            {formik.touched.email && formik.errors.email && <div style={{color: "tomato"}}>{formik.errors.email}</div>}
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </form>
      </Modal>
    </>
  );
}

export default ClientModal;