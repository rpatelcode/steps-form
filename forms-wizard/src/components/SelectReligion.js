import React from "react";
import _ from "lodash";
import { Input, Select, Dropdown, Form } from "semantic-ui-react";
const obj1 = [
  { key: "Agnostic", value: "181", text: "Agnostic" },
  { key: "Ahmadi Muslim", value: "380", text: "Ahmadi Muslim" },
  { key: "Anglican", value: "188", text: "Anglican" },
  { key: "Apostolic", value: "220", text: "Apostolic" },
  { key: "Armenian Apostolic", value: "460", text: "Armenian Apostolic" },
  { key: "Armenian Orthodox", value: "480", text: "Armenian Orthodox" },
  { key: "Atheist", value: "182", text: "Atheist" },
  { key: "Baha'i ", value: "1", text: "Baha'i " },
  { key: "Baptist", value: "183", text: "Baptist" },
  { key: "Bethel Apostolic", value: "320", text: "Bethel Apostolic" },
  { key: "Bible", value: "402", text: "Bible" },
  { key: "Born Again Christian", value: "500", text: "Born Again Christian" },
  { key: "Buddhist", value: "2", text: "Buddhist" },
  { key: "Catholic", value: "163", text: "Catholic" },
  { key: "Catholique", value: "340", text: "Catholique" },
  { key: "Chaldean Catholic", value: "461", text: "Chaldean Catholic" },
  { key: "Christian", value: "3", text: "Christian" },
  { key: "Christian Orthodox", value: "180", text: "Christian Orthodox" },
  { key: "Church Of Christ", value: "242", text: "Church Of Christ" },
  { key: "Church Of England", value: "260", text: "Church Of England" },
  { key: "Church Of God", value: "280", text: "Church Of God" },
  { key: "Confucianism", value: "4", text: "Confucianism" },
  { key: "Coptic Orthodox", value: "441", text: "Coptic Orthodox" },
  { key: "Eastern Orthodox", value: "401", text: "Eastern Orthodox" },
  { key: "Evangelist", value: "206", text: "Evangelist" },
  { key: "Greek Orthodox", value: "187", text: "Greek Orthodox" },
  { key: "Hebrew", value: "207", text: "Hebrew" },
  { key: "Hindu", value: "5", text: "Hindu" },
  { key: "Hindu Jain", value: "221", text: "Hindu Jain" },
  { key: "Humanist", value: "205", text: "Humanist" },
  { key: "Islam", value: "6", text: "Islam" },
  { key: "Islam - Sunni", value: "360", text: "Islam - Sunni" },
  { key: "Ismaili Muslim", value: "208", text: "Ismaili Muslim" },
  { key: "Jain", value: "420", text: "Jain" },
  { key: "Jainism", value: "7", text: "Jainism" },
  { key: "Jehovah's Witnesses", value: "201", text: "Jehovah's Witnesses" },
  { key: "Jewish", value: "160", text: "Jewish" },
  { key: "Judaism", value: "8", text: "Judaism" },
  { key: "Lutheran", value: "209", text: "Lutheran" },
  { key: "Maronite Catholic", value: "361", text: "Maronite Catholic" },
  { key: "Mennonite", value: "210", text: "Mennonite" },
  { key: "Methodist", value: "211", text: "Methodist" },
  { key: "Mormon", value: "202", text: "Mormon" },
  { key: "Muslim", value: "185", text: "Muslim" },
  { key: "Non Denominational", value: "440", text: "Non Denominational" },
  { key: "Not Provided", value: "9997", text: "Not Provided" },
  { key: "Orthodox", value: "186", text: "Orthodox" },
  { key: "Not Listed", value: "9999", text: "Not Listed" },
  { key: "Pentecostal", value: "190", text: "Pentecostal" },
  { key: "Presbyterian", value: "203", text: "Presbyterian" },
  { key: "Protestant", value: "161", text: "Protestant" },
  { key: "Quaker", value: "212", text: "Quaker" },
  { key: "Roman Catholic", value: "162", text: "Roman Catholic" },
  { key: "Russian Orthodox", value: "214", text: "Russian Orthodox" },
  { key: "Salvation Army", value: "300", text: "Salvation Army" },
  { key: "Scientology", value: "222", text: "Scientology" },
  { key: "Serbian Orthodox", value: "213", text: "Serbian Orthodox" },
  { key: "Seventh Day Adventist", value: "100", text: "Seventh Day Adventist" },
  { key: "Shinto", value: "9", text: "Shinto" },
  { key: "Sikh", value: "10", text: "Sikh" },
  { key: "Spiritualism", value: "204", text: "Spiritualism" },
  { key: "Taoism", value: "11", text: "Taoism" },
  { key: "Ukrainian Catholic", value: "240", text: "Ukrainian Catholic" },
  { key: "Ukrainian Orthodox", value: "400", text: "Ukrainian Orthodox" },
  { key: "Unitarian", value: "215", text: "Unitarian" },
  { key: "United Church", value: "200", text: "United Church" },
  { key: "Wesleyan", value: "241", text: "Wesleyan" },
  { key: "Wiccan", value: "184", text: "Wiccan" },
  { key: "Zoroastrianism", value: "12", text: "Zoroastrianism" }
];

const religionOptions = _.map(obj1, o => ({
  key: o.key,
  text: o.key,
  value: o.key
}));

// const obj3 = [
//   { key: "Not Listed***", text: "Not Listed***", value: "Not Listed***" }
// ];
// const religionOptions = [...obj2, ...obj3];

const SelectReligion = props => {
  const { id, handleChange, values, errors } = props;
  const religionFieldId = id;
  // descriptor return name of values object
  const descriptor1 = Object.getOwnPropertyDescriptor(values, religionFieldId);
  const religionValue = descriptor1.value;
  // descriptor return name of errors object

  //   const descriptor1 = Object.getOwnPropertyDescriptor(errors, religionFieldId);
  //   const errorsReligionValue = descriptor1;

  return (
    <Form.Group>
      <Form.Field>
        <label>
          If the religion is not listed, please select 'Not Listed' and type the
          religion name in the box below
        </label>
        <Dropdown
          search
          selection
          options={religionOptions}
          //   placeholder={religionValue ? religionValue : id + "'s religion"}
          placeholder={religionValue ? religionValue : "Select religion"}
          onChange={(e, { value }) =>
            handleChange({
              name: religionFieldId,
              value: value
            })
          }
        />
      </Form.Field>
      {religionValue === "Not Listed" ? (
        <Form.Field
          id="app1ReligionOther"
          name="app1ReligionOther"
          control={Input}
          label="Or Type"
          autoFocus
          onChange={e =>
            handleChange({
              name: "app1ReligionOther",
              value: e.target.value
            })
          }
          //   value={religionValue}
          //   required
          //   error={errors.app1ReligionOther ? true : false}
        />
      ) : null}
    </Form.Group>
  );
};

export default SelectReligion;
