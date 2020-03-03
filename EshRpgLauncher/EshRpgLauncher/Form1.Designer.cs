namespace EshRpgLauncher
{
    partial class Form1
    {
        /// <summary>
        /// Обязательная переменная конструктора.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Освободить все используемые ресурсы.
        /// </summary>
        /// <param name="disposing">истинно, если управляемый ресурс должен быть удален; иначе ложно.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Код, автоматически созданный конструктором форм Windows

        /// <summary>
        /// Требуемый метод для поддержки конструктора — не изменяйте 
        /// содержимое этого метода с помощью редактора кода.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.ledmysql = new System.Windows.Forms.Button();
            this.lednode = new System.Windows.Forms.Button();
            this.StartBtn = new System.Windows.Forms.Button();
            this.timer_leds = new System.Windows.Forms.Timer(this.components);
            this.SuspendLayout();
            // 
            // ledmysql
            // 
            this.ledmysql.Location = new System.Drawing.Point(12, 12);
            this.ledmysql.Name = "ledmysql";
            this.ledmysql.Size = new System.Drawing.Size(263, 25);
            this.ledmysql.TabIndex = 0;
            this.ledmysql.UseVisualStyleBackColor = true;
            this.ledmysql.Click += new System.EventHandler(this.ledmysql_Click);
            // 
            // lednode
            // 
            this.lednode.Location = new System.Drawing.Point(12, 43);
            this.lednode.Name = "lednode";
            this.lednode.Size = new System.Drawing.Size(263, 28);
            this.lednode.TabIndex = 1;
            this.lednode.UseVisualStyleBackColor = true;
            this.lednode.Click += new System.EventHandler(this.lednode_Click);
            // 
            // StartBtn
            // 
            this.StartBtn.Location = new System.Drawing.Point(12, 167);
            this.StartBtn.Name = "StartBtn";
            this.StartBtn.Size = new System.Drawing.Size(263, 25);
            this.StartBtn.TabIndex = 2;
            this.StartBtn.Text = "Запуск игры";
            this.StartBtn.UseVisualStyleBackColor = true;
            this.StartBtn.Click += new System.EventHandler(this.StartBtn_Click);
            // 
            // timer_leds
            // 
            this.timer_leds.Enabled = true;
            this.timer_leds.Tick += new System.EventHandler(this.timer_leds_Tick);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(286, 206);
            this.Controls.Add(this.StartBtn);
            this.Controls.Add(this.lednode);
            this.Controls.Add(this.ledmysql);
            this.Name = "Form1";
            this.Text = "Eshiba RpgGame";
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Button ledmysql;
        private System.Windows.Forms.Button lednode;
        private System.Windows.Forms.Button StartBtn;
        private System.Windows.Forms.Timer timer_leds;
    }
}

