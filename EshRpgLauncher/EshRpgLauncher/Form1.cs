using System;
using System.Diagnostics;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace EshRpgLauncher
{
    public partial class Form1 : Form
    {
        Process mysql = new Process(); 
        Process node = new Process();
        public Form1()
        {
            InitializeComponent();
            mysql.StartInfo.FileName = "startmysql.bat";
            node.StartInfo.FileName = "startnodejs.bat";
        }

        private void StartBtn_Click(object sender, EventArgs e)
        {
            Process chrome = new Process();
            chrome.StartInfo.FileName = "chrome.exe";
            chrome.StartInfo.Arguments = " 127.0.0.1";
            chrome.Start();
        }

        private void timer_leds_Tick(object sender, EventArgs e)
        {
            try
            {           
                if (mysql.HasExited)
                {
                    ledmysql.BackColor = Color.Pink;
                    ledmysql.Text = "Включить MySql сервер";
                }
                else
                {
                    ledmysql.BackColor = Color.LightGreen;
                    ledmysql.Text = "Выключить MySql сервер";

                }     
            }
            catch
            {
                ledmysql.BackColor = Color.Pink;
                ledmysql.Text = "Включить MySql сервер";
            }

            try
            {
                if (node.HasExited)
                {
                    lednode.BackColor = Color.Pink;
                    lednode.Text = "Включить NodeJs сервер";
                }
                else
                {
                    lednode.BackColor = Color.LightGreen;
                    lednode.Text = "Выключить NodeJs сервер";

                }
            }
            catch
            {
                lednode.BackColor = Color.Pink;
                lednode.Text = "Включить NodeJs сервер";
            }


        }

        private void ledmysql_Click(object sender, EventArgs e)
        {
            mysql.Start();
            System.Threading.Thread.Sleep(5000);

        }

        private void lednode_Click(object sender, EventArgs e)
        {
            node.Start();    
        }
    }
}
