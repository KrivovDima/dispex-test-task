import React from 'react';
import {Select} from "antd";

const { Option } = Select;

function AddressItem(props) {

  return (
    <span>
      <Select
        disabled={props.disabled}
        showSearch
        style={{ width: 200 }}
        placeholder={props.placeholder}
        optionFilterProp="children"
        onChange={props.onChange}
        onBlur={props.onBlur}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {props.list.map(item => {
          return <Option key={item.id} value={item.id}>{item.name}</Option>
        })}
      </Select>
    </span>
  );
}

export default AddressItem;

