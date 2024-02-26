// import { EyeInvisibleOutlined, EyeTwoTone, GooglePlusOutlined } from '@ant-design/icons';
// import CustomButton from '@components/customButton/CustomButton';
// import { Checkbox, Col, Form, Input, Row, Space } from 'antd';
// import { FC } from 'react';
// import styles from './baseForm.module.scss';

// const BaseForm: FC = () => {
//     return (
//         <Form
//             name='basic'
//             wrapperCol={{ span: 24 }}
//             initialValues={{ remember: true }}
//             autoComplete='off'
//             size='large'
//             className={styles.form}
//         >
//             <Space direction='vertical' size={0}>
//                 <Form.Item name='username' style={{ marginBottom: 32 }}>
//                     <Input addonBefore='e-mail:' />
//                 </Form.Item>
//                 <Form.Item name='password' style={{ marginBottom: 30 }}>
//                     <Input.Password
//                         placeholder='Пароль'
//                         style={{ fontSize: 14, lineHeight: '180%' }}
//                         iconRender={(visible) =>
//                             visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
//                         }
//                     />
//                 </Form.Item>
//             </Space>

//             <Row align={'middle'}>
//                 <Col span={12}>
//                     <Checkbox>Запомнить меня</Checkbox>
//                 </Col>
//                 <Col
//                     span={12}
//                     style={{
//                         textAlign: 'right',
//                     }}
//                 >
//                     <CustomButton
//                         type='link'
//                         style={{ padding: 0 }}
//                         className={styles.resetPassBtn}
//                     >
//                         Забыли пароль?
//                     </CustomButton>
//                 </Col>
//             </Row>
//             <Space direction='vertical' size='middle'>
//                 <Form.Item wrapperCol={{ span: 24 }} style={{ margin: 0 }}>
//                     <CustomButton
//                         size='large'
//                         type='primary'
//                         className={`${styles.submitBtn} ${styles.btn}`}
//                     >
//                         Войти
//                     </CustomButton>
//                 </Form.Item>
//                 <Form.Item wrapperCol={{ span: 24 }} style={{ margin: 0 }}>
//                     <CustomButton
//                         icon={<GooglePlusOutlined />}
//                         size='large'
//                         type='default'
//                         className={styles.btn}
//                     >
//                         Войти через Google
//                     </CustomButton>
//                 </Form.Item>
//             </Space>
//         </Form>
//     );
// };

// export default BaseForm;
