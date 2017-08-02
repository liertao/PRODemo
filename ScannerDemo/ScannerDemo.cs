using System;
using System.Drawing;
using System.Windows.Forms;
using NLSCAN.MacCtrl;
using System.Data;
using System.Reflection;
using System.IO;
using System.Xml;
using System.Collections;

namespace ScannerDemo
{
    public partial class ScannerDemo : Form
    {
        private ArrayList listData = null;
        private DataTable dt = null;
        DataRow row2 = null;
        DataRow row4 = null;
        DataRow row6 = null;
        DataRow row8 = null;
        DataRow row10 = null;
        DataRow row12 = null;
        DataRow row14 = null;

        private NLSScanner scanTest = new NLSScanner();
        public ScannerDemo()
        {
            this.listData = new ArrayList();
            InitializeComponent();
            initLoadXmlData();
            InitDataGridColumnHeader();
            scanTest.OnDecodeEvent += new DecodeEventHandler(scan_OnDecodeEvent);
            //txtScanTimeOut.Text = scanTest.StartScanTimeOut.ToString();
            //Scanner.nCodePage = 0;//the default value of codefage is 0  
        }

        public String getXMLDBPath()
        {
            String currExePath = Assembly.GetExecutingAssembly().GetName().CodeBase;
            String currDir = Path.GetDirectoryName(currExePath);
            //MessageBox.Show(currExePath);
            //MessageBox.Show(currDir);
            String currDBPath = currDir + "\\XmlDB\\model.xml";
            //MessageBox.Show(currDBPath);
            return currDBPath;
        }

        public void initLoadXmlData()
        {
            String DBPath = getXMLDBPath();
            //MessageBox.Show(DBPath);

            XmlDocument xml = new XmlDocument();
            xml.Load(DBPath);
            XmlNodeList list = xml.SelectSingleNode("inv_transactions").ChildNodes;
            String n = list.Count+"";
            //MessageBox.Show(n);

            foreach(XmlElement element in list)
            {
                //String name = element.GetAttribute("name");
                //MessageBox.Show(name);
                listData.Add(element);
            }
        }

        private void InitDataGridColumnHeader()
        {
            DataGridTableStyle dataGridStyle = null;
            dataGridStyle = new DataGridTableStyle();
            this.dataGrid1.DataSource = createDataTable();
            this.dataGrid1.TableStyles.Clear();
            this.dataGrid1.TableStyles.Add(dataGridStyle);

            GridColumnStylesCollection dataGridColStyle = this.dataGrid1.TableStyles[0].GridColumnStyles;
            DataGridTextBoxColumn aaa = new DataGridTextBoxColumn();

            DataGridTextBoxColumn Text = new DataGridTextBoxColumn();
            dataGridColStyle[0].Width = 44;
            dataGridColStyle[1].Width = 40;
            dataGridColStyle[2].Width = 40;
            dataGridColStyle[3].Width = 40;
            dataGridColStyle[4].Width = 40;

            dataGridColStyle[0].HeaderText = "";
            dataGridColStyle[1].HeaderText = "";
            dataGridColStyle[2].HeaderText = "";
            dataGridColStyle[3].HeaderText = "";
            dataGridColStyle[4].HeaderText = "";

        }

        private DataTable createDataTable() 
        {
            dt = new DataTable();
            DataColumn col = new DataColumn();
            col.Caption = "��������";
            col.ColumnName = "GoodNames";
            dt.Columns.Add(col);

            col = new DataColumn();
            col.Caption = "�ͺ�";
            col.ColumnName = "GoodType";
            dt.Columns.Add(col);

            col = new DataColumn();
            col.Caption = "��λ";
            col.ColumnName = "OutCode";
            dt.Columns.Add(col);

            col = new DataColumn();
            col.Caption = "��������";
            col.ColumnName = "ItemTypeName";
            dt.Columns.Add(col);

            col = new DataColumn();
            col.Caption = "����ID";
            col.ColumnName = "GoodsId";
            dt.Columns.Add(col);

            //��һ��
            DataRow row1 = dt.NewRow();
            row1[0] = "�����";
            row1[1] = "��Ŀ��";
            row1[2] = "�����ˮ��";
            row1[3] = "���ϱ��";
            row1[4] = "��������";
            dt.Rows.Add(row1);
            row2 = dt.NewRow();
            row2[0] = "";
            row2[1] = "";
            row2[2] = "";
            row2[3] = "";
            row2[4] = "";
            dt.Rows.Add(row2);

            //�ڶ���
            DataRow row3 = dt.NewRow();
            row3[0] = "����ͺ�";
            row3[1] = "�����ƺ�";
            row3[2] = "��������";
            row3[3] = "�����ȼ�";
            row3[4] = "ͼ��";
            dt.Rows.Add(row3);
            row4 = dt.NewRow();
            row4[0] = "";
            row4[1] = "";
            row4[2] = "";
            row4[3] = "";
            row4[4] = "";
            dt.Rows.Add(row4);

            //������
            DataRow row5 = dt.NewRow();
            row5[0] = "���Ϸ���";
            row5[1] = "��Դ";
            row5[2] = "�汾��";
            row5[3] = "���Ƴ���";
            row5[4] = "������";
            dt.Rows.Add(row5);
            row6 = dt.NewRow();
            row6[0] = "";
            row6[1] = "";
            row6[2] = "";
            row6[3] = "";
            row6[4] = "";
            dt.Rows.Add(row6);

            //������
            DataRow row7 = dt.NewRow();
            row7[0] = "���ؼ�";
            row7[1] = "������λ";
            row7[2] = "�������";
            row7[3] = "���п������";
            row7[4] = "�ƻ��۸�";
            dt.Rows.Add(row7);
            row8 = dt.NewRow();
            row8[0] = "";
            row8[1] = "";
            row8[2] = "";
            row8[3] = "";
            row8[4] = "";
            dt.Rows.Add(row8);

            //������
            DataRow row9 = dt.NewRow();
            row9[0] = "��������";
            row9[1] = "�������";
            row9[2] = "�ⷿ";
            row9[3] = "��";
            row9[4] = "��";
            dt.Rows.Add(row9);
            row10 = dt.NewRow();
            row10[0] = "";
            row10[1] = "";
            row10[2] = "";
            row10[3] = "";
            row10[4] = "";
            dt.Rows.Add(row10);

            //������
            DataRow row11 = dt.NewRow();
            row11[0] = "λ";
            row11[1] = "�ϸ�֤��";
            row11[2] = "�������";
            row11[3] = "��Ч����";
            row11[4] = "ʧЧ����";
            dt.Rows.Add(row11);
            row12 = dt.NewRow();
            row12[0] = "";
            row12[1] = "";
            row12[2] = "";
            row12[3] = "";
            row12[4] = "";
            dt.Rows.Add(row12);

            //������
            DataRow row13 = dt.NewRow();
            row13[0] = "��ⲿ��";
            row13[1] = "������";
            row13[2] = "����Ա";
            row13[3] = "��ע";
            row13[4] = "";
            dt.Rows.Add(row13);
            row14 = dt.NewRow();
            row14[0] = "";
            row14[1] = "";
            row14[2] = "";
            row14[3] = "";
            row14[4] = "";
            dt.Rows.Add(row14);

            return dt;


        }

        private void scan_OnDecodeEvent(object sender, ScannerEventArgs e)
        {
            for(int i=0; i<e.DataLen; i++)
            {
                if(e.ByteData[i] == 0)
                {//if the data include 0, then change 0 to 0x20
                    e.ByteData[i] = 0x20;
                    NLSSysCtrl.NKDbgPrintfW("ByteData[" + i.ToString() + "] = 0\r\n");
                }
                if(e.ByteData[i] < 0x20)
                {
                    NLSSysCtrl.NKDbgPrintfW("ByteData[" + i.ToString() + "] = " + e.ByteData[i].ToString() + "\r\n");
                }
            }
            string byteData2string = NLSScanner.MultiByteToUnicodeString(e.ByteData, e.DataLen);


            //MessageBox.Show("ɨ����Ϊ:"+byteData2string);
            showScanInfo(listData,byteData2string);

        }

        private void showScanInfo(ArrayList list, String str)
        { 
            bool flag = true;
            //�����Ƚϲ�ѯ�������������ݽ��б����䣬���û�����ݽ�����ʾ
            for (int i = 0; i < list.Count;i++ )
            {
                XmlElement element = (XmlElement)list[i];
                String transaction_seq_no = element.GetElementsByTagName("transaction_seq_no")[0].InnerText;
                //MessageBox.Show(transaction_seq_no);
                //if(str.Equals(element.GetAttribute("id")))//��Ҫ�����ֵ
                if (str.Equals(transaction_seq_no))//��Ҫ�����ֵ
                {
                    //MessageBox.Show("�����ֵ");
                    row2[0] = element.GetElementsByTagName("requisition_no")[0].InnerText;
                    row2[1] = element.GetElementsByTagName("project_no")[0].InnerText;
                    row2[2] = element.GetElementsByTagName("transaction_seq_no")[0].InnerText;
                    row2[3] = element.GetElementsByTagName("item_no")[0].InnerText;
                    row2[4] = element.GetElementsByTagName("prod_name")[0].InnerText;

                    row4[0] = element.GetElementsByTagName("prod_type")[0].InnerText;
                    row4[1] = element.GetElementsByTagName("specifications")[0].InnerText;
                    row4[2] = element.GetElementsByTagName("techno_condition")[0].InnerText;
                    row4[3] = element.GetElementsByTagName("quality_rate")[0].InnerText;
                    row4[4] = element.GetElementsByTagName("drawer_no")[0].InnerText;

                    row6[0] = element.GetElementsByTagName("item_type")[0].InnerText;
                    row6[1] = element.GetElementsByTagName("procurement_code")[0].InnerText;
                    row6[2] = element.GetElementsByTagName("version_code")[0].InnerText;
                    row6[3] = element.GetElementsByTagName("shop_code")[0].InnerText;
                    row6[4] = element.GetElementsByTagName("zfx12")[0].InnerText;

                    row8[0] = element.GetElementsByTagName("dup_flag")[0].InnerText;
                    row8[1] = element.GetElementsByTagName("unit_of_measure")[0].InnerText;
                    row8[2] = element.GetElementsByTagName("trans_qty")[0].InnerText;
                    row8[3] = element.GetElementsByTagName("after_quantity_on_hand")[0].InnerText;
                    row8[4] = element.GetElementsByTagName("unit_cost")[0].InnerText;

                    row10[0] = element.GetElementsByTagName("make_date")[0].InnerText;
                    row10[1] = element.GetElementsByTagName("trans_date")[0].InnerText;
                    row10[2] = element.GetElementsByTagName("to_store_code")[0].InnerText;
                    row10[3] = element.GetElementsByTagName("to_aisle")[0].InnerText;
                    row10[4] = element.GetElementsByTagName("to_row_no")[0].InnerText;

                    row12[0] = element.GetElementsByTagName("to_bin")[0].InnerText;
                    row12[1] = element.GetElementsByTagName("check_card_no")[0].InnerText;
                    row12[2] = element.GetElementsByTagName("to_lot_no")[0].InnerText;
                    row12[3] = element.GetElementsByTagName("period_validity")[0].InnerText;
                    row12[4] = element.GetElementsByTagName("expired_date")[0].InnerText;

                    row14[0] = element.GetElementsByTagName("from_to")[0].InnerText;
                    row14[1] = element.GetElementsByTagName("fetch_id")[0].InnerText;
                    row14[2] = element.GetElementsByTagName("operation_id")[0].InnerText;
                    row14[3] = element.GetElementsByTagName("comments")[0].InnerText;
                    //row14[4] = element.GetElementsByTagName("transaction_seq_no")[0].InnerText;

                    flag = false;
                    break;
                }

            }
            if(flag)
            {
                MessageBox.Show("���ݲ����ڣ�");
            }
        }

    }
}