using System;
using NasaAstroPlatform.Desktop.Services;

namespace NasaAstroPlatform.Desktop.Client
{
	[System.ComponentModel.ToolboxItem (true)]
	public partial class SendMessageWidget : Gtk.Bin
	{
		public SendMessageWidget ()
		{
			this.Build ();
		}

		public IMessageSenderService MessageService {
			get;
			set;
		}

		protected void OnButton1Clicked (object sender, EventArgs e)
		{
			SendMessage (this.entry1.Text);
		}

		private void SendMessage(string message)
		{
			if (!string.IsNullOrWhiteSpace (message)) {
				this.MessageService.SendMessage (message);
				UpdateLog(message);
				this.entry1.Text = string.Empty;
			}
		}

		private void UpdateLog(string message)
		{
			this.textview1.Buffer.Text += string.Format("[{0}] {1}{2}", DateTime.Now.ToLongTimeString(), message, Environment.NewLine);
		}

		protected void OnEntry1Activated (object sender, EventArgs e)
		{
			SendMessage (this.entry1.Text);
		}
	}
}
