# Roadmap

## Now: the foundations

- The shared Rust core: normalized model, connector contract, local storage, view-models.
- Connectors for YouTube, Odysee and RSS/Atom feeds.
- The GNOME app, packaged as a Flatpak.

## First release

Sign in, home and recommendations, search, subscriptions, watch history (read and write), likes,
comments (read and write), on each service that supports them.

## Next

- Playlists and "watch later".
- Channel pages.
- Autoplay and a play queue.
- Shorts.
- Odysee livestreams.

## Later

- Windows 11 on ARM (WinUI 3, Fluent design).
- An audio mode.
- More services: Dailymotion and PeerTube are the next candidates.

## Getting the app

Flâneur for GNOME is packaged as a Flatpak. Until the first release, test builds are only
available as build artifacts of the GNOME app's pull requests on GitHub. Flathub is not an option:
its rules exclude apps written with AI assistance, as Flâneur is. A Flatpak repository of our own,
or a Snap, will carry the releases.
