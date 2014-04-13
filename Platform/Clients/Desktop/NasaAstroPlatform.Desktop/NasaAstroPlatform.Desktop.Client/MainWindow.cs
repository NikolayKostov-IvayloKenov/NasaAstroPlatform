using System;
using Gtk;
using NasaAstroPlatform.Desktop.Services;

public partial class MainWindow: Gtk.Window
{
	private const string BuiltInSessionId = "vasko";

	public MainWindow () : base (Gtk.WindowType.Toplevel)
	{
		Build ();
		this.sendmessagewidget1.MessageService = new MessageSenderService (BuiltInSessionId);
		this.sendmessagewidget2.MessageService = new NasaMessageSenderService (BuiltInSessionId);
	}

	protected void OnDeleteEvent (object sender, DeleteEventArgs a)
	{
		Application.Quit ();
		a.RetVal = true;
	}
}
