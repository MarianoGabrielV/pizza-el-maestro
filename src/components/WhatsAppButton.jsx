// src/components/WhatsAppButton.jsx
import { clientConfig } from "../config/clientConfig";

function formatMoney(n) {
  return new Intl.NumberFormat("es-AR").format(n);
}

function getWhatsAppNumber() {
  const raw =
    clientConfig?.whatsappNumber ||
    clientConfig?.whatsapp?.number ||
    clientConfig?.whatsapp?.phone ||
    clientConfig?.whatsapp ||
    "";
  return String(raw).replace(/\D/g, "");
}

export default function WhatsAppButton({ cart, total, customer, isClosed }) {
  const cartCount = cart.reduce((sum, item) => sum + (item.qty || 0), 0);

  const getMessage = () => {
    const lines = [];
    lines.push("🟧 Nuevo pedido:");
    lines.push("");
    lines.push("🍕 Detalle del pedido:");

    cart.forEach((item) => {
      const qty = item.qty || 1;
      const extrasSum = (item.extras || []).reduce(
        (a, e) => a + (e.price || 0),
        0
      );
      const unitTotal = item.price + extrasSum;

      lines.push(`- ${qty}x ${item.name} ($${formatMoney(unitTotal)} c/u)`);

      if (item.extras && item.extras.length > 0) {
        item.extras.forEach((e) => {
          lines.push(
            `   ↳ ${e.name}${e.price ? ` (+$${formatMoney(e.price)})` : ""}`
          );
        });
      }

      if (item.pack) {
        const title =
          item.pack.size === 12
            ? "   🥟 Docena (detalle):"
            : "   🥟 Media docena (detalle):";
        lines.push(title);

        const detail = Object.entries(item.pack.items || {})
          .filter(([, qty]) => qty > 0)
          .map(([id, qty]) => `${qty}x ${id}`)
          .join(", ");

        lines.push(`   ${detail || "(sin selección)"}`);
      }
    });

    lines.push("");
    lines.push(`💰 Total: $${formatMoney(total)}`);
    lines.push("");
    lines.push("👤 Datos del cliente:");
    lines.push(`Nombre: ${customer.name || "-"}`);
    lines.push(`Dirección y numeración: ${customer.address || "-"}`);
    lines.push(`Entre calles: ${customer.address2 || "-"}`);
    lines.push(`Teléfono: ${customer.phone || "-"}`);
    lines.push(`Entrega: ${customer.deliveryMethod || "-"}`);
    lines.push(`Pago: ${customer.paymentMethod || "-"}`);

    if (customer.comments?.trim()) {
      lines.push(`Comentarios: ${customer.comments.trim()}`);
    }

    return lines.join("\n");
  };

  const handleSend = () => {
    const phone = getWhatsAppNumber();

    if (!phone) {
      alert("No encontré el número de WhatsApp en clientConfig.");
      return;
    }
    if (!cart.length) {
      alert("El carrito está vacío.");
      return;
    }
    if (isClosed && clientConfig.horario?.enabled) {
      alert(
        clientConfig.horario.mensajeCerrado ||
          "En este momento el local está cerrado."
      );
      return;
    }

    const msg = encodeURIComponent(getMessage());
    const url = `https://wa.me/${phone}?text=${msg}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const canSend =
    cart.length > 0 &&
    customer.name?.trim() &&
    customer.address?.trim() &&
    customer.phone?.trim();

  return (
    <>
      {/* ✅ Botón verde (debajo del formulario) */}
      <button
        type="button"
        className="btn btn-success w-100 mt-3"
        onClick={handleSend}
        disabled={!canSend}
        title={
          canSend
            ? ""
            : "Completá Nombre, Dirección y Teléfono para enviar el pedido"
        }
      >
        Enviar pedido por WhatsApp
      </button>

      {/* 🔴 BARRA ROJA INFORMATIVA (solo mobile) */}
      <div className="floating-wpp d-md-none">
        <div className="floating-wpp-label">
          🧾 {cartCount} producto{cartCount !== 1 ? "s" : ""} •{" "}
          <span className="fw-bold">${formatMoney(total)}</span>
        </div>

        <div className="floating-wpp-chip">
          👀 Armando pedido
        </div>
      </div>
    </>
  );
}
