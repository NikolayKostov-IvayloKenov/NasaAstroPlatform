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
			throw new NotImplementedException ();
		}
	}
}

