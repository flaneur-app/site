# Why Flâneur

Watching videos in a browser is slower than it should be. Pages take seconds to load, pause
reacts late, touch scrolling stutters, and every platform is its own tab with its own habits.

Flâneur is a native desktop app instead:

- **Native, per platform.** On GNOME it is a GTK4/libadwaita app that follows the GNOME design
  guidelines; on Windows it will be a WinUI 3 app. Each app only draws its own interface: the
  logic, the screens' state and the connections to the services are one shared Rust core.
- **The right stream for your machine.** Flâneur picks the codec your graphics card can decode in
  hardware before picking the highest resolution, because a stream decoded by the processor is
  what makes modest PCs stutter.
- **Several services, one app.** Each service has its own connector, and the app brings them
  together: one home, one history, one list of followed channels, each item labelled with its
  source.
- **Your account, not a copy of it.** Signing in to a service means your history, likes,
  subscriptions and comments stay those of your account there. Flâneur reads them and writes back.

## Principles

- **Open source** under the AGPL-3.0-or-later.
- **No server.** Flâneur has no backend, no proxy and no analytics. Requests go from your machine
  to the services, from your own IP address.
- **Your credentials stay with you**, in your operating system's keyring, and are only ever sent to
  the service they belong to.
- **Independent.** Flâneur is not affiliated with, endorsed or sponsored by any service it
  connects to.
