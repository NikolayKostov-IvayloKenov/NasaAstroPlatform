using System;

namespace NasaAstroPlatform.Desktop.Services
{
	public class MessageSenderService : ServiceBase, IMessageSenderService
	{
		private const string ActivityTypeName = "text";

		public MessageSenderService (string sessionId)
		{
			this.SessionId = sessionId;
		}

		public string SessionId { get; set; }

		public void SendMessage(string message, string sessionId)
		{
			throw new NotImplementedException ();
		}
	}
}

